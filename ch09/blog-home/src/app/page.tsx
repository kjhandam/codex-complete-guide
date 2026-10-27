import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { posts, tags, formatDate } from "@/data/posts";

type Query = { [key: string]: string | string[] | undefined };
const first = (value: Query[string]) => Array.isArray(value) ? value[0] : value;

export default async function Home({ searchParams }: { searchParams: Promise<Query> }) {
  const params = await searchParams;
  const query = (first(params.q) ?? "").trim();
  const tag = first(params.tag);
  const selectedTag = tag && tags.includes(tag) ? tag : undefined;
  const matching = posts.filter(post => (!selectedTag || post.tags.includes(selectedTag)) &&
    `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    .toSorted((a, b) => b.date.localeCompare(a.date));
  const pageCount = Math.max(1, Math.ceil(matching.length / 8));
  const requested = Number(first(params.page) ?? 1);
  const page = Number.isSafeInteger(requested) ? Math.min(pageCount, Math.max(1, requested)) : 1;
  const visiblePosts = matching.slice((page - 1) * 8, page * 8);
  function href(next: { q?: string; tag?: string; page?: number } = {}) {
    const values = new URLSearchParams();
    if (next.q) values.set("q", next.q);
    if (next.tag) values.set("tag", next.tag);
    if (next.page && next.page > 1) values.set("page", String(next.page));
    return `/${values.size ? `?${values}` : ""}#posts`;
  }
  return (
    <main id="main" className="home-main">
      <section className="intro reading-column" aria-labelledby="intro-title">
        <Badge>BUILD LOG · 개발 공부 노트</Badge>
        <h1 id="intro-title">배우고, 만들어 보고,<br />기록합니다.</h1>
        <p className="introduction">안녕하세요. 작은 배움을 코드로 옮기며 성장하는 개발자입니다.</p>
      </section>
      <section id="posts" className="records-section" aria-labelledby="posts-title">
        <div className="section-heading"><h2 id="posts-title">최근 기록</h2><p className="metadata" role="status" aria-live="polite" aria-atomic="true">{matching.length}개의 기록</p></div>
        <form action="/#posts" method="get" className="search-form" key={`${query}:${selectedTag ?? ""}`}>
          {selectedTag && <input type="hidden" name="tag" value={selectedTag} />}
          <FieldGroup><Field><FieldLabel htmlFor="post-search">글 검색</FieldLabel><Input id="post-search" name="q" type="search" placeholder="제목이나 키워드 검색" defaultValue={query} /></Field></FieldGroup>
          <div className="search-actions"><Button type="submit">검색</Button>{query && <Button variant="outline" nativeButton={false} render={<Link href={href({ tag: selectedTag })} />}>검색 지우기</Button>}</div>
        </form>
        {(query || selectedTag) && <div className="active-conditions" aria-label="적용된 조건">
          {query && <Link href={href({ tag: selectedTag })}>검색: {query} × <span className="sr-only">해제</span></Link>}
          {selectedTag && <Link href={href({ q: query })}>주제: {selectedTag} × <span className="sr-only">해제</span></Link>}
          <Link href="/#posts">전체 글 보기 · 조건 초기화</Link>
        </div>}
        <div className="post-list">
          {visiblePosts.map(post => <article key={post.slug} aria-labelledby={`title-${post.slug}`}>
            <Card>
              <div className="record-info"><time dateTime={post.date}>{formatDate(post.date)}</time></div>
              <div className="record-body">
                <CardHeader><CardTitle><h3 id={`title-${post.slug}`}><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3></CardTitle><CardDescription>{post.summary}</CardDescription></CardHeader>
                <CardContent><p className="post-metadata">{post.readingMinutes}분 읽기</p></CardContent>
                <CardFooter><div className="tag-links">{post.tags.map(item => <Badge key={item} variant="secondary" render={<Link href={href({ q: query, tag: item })} />}>{item}</Badge>)}</div></CardFooter>
              </div>
            </Card>
          </article>)}
        </div>
        {!matching.length && <Empty><EmptyHeader><EmptyTitle>{posts.length ? "검색 결과가 없습니다" : "첫 기록을 준비하고 있습니다"}</EmptyTitle><EmptyDescription>다른 키워드나 주제로 기록을 찾아보세요.</EmptyDescription></EmptyHeader><EmptyContent><Button variant="outline" nativeButton={false} render={<Link href="/#posts" />}>검색 초기화</Button></EmptyContent></Empty>}
        {!!matching.length && <nav className="pagination" aria-label="글 목록 페이지">
          {page > 1 ? <Button variant="outline" nativeButton={false} render={<Link href={href({ q: query, tag: selectedTag, page: page - 1 })} />}>이전</Button> : <Button variant="outline" disabled>이전</Button>}
          <span className="metadata" aria-current="page">{page} / {pageCount} 페이지</span>
          {page < pageCount ? <Button variant="outline" nativeButton={false} render={<Link href={href({ q: query, tag: selectedTag, page: page + 1 })} />}>다음</Button> : <Button variant="outline" disabled>다음</Button>}
        </nav>}
      </section>
      <section id="tags" className="tag-section" aria-labelledby="tags-title">
        <h2 id="tags-title">주제로 둘러보기</h2><p className="summary">관심 있는 주제의 기록을 모아 보세요.</p>
        <div className="tag-links">{tags.map(item => <Badge key={item} variant="secondary" render={<Link href={href({ q: query, tag: item })} />} aria-current={selectedTag === item ? "page" : undefined}>{item}<span aria-label={`${posts.filter(post => post.tags.includes(item)).length}개 글`}>{posts.filter(post => post.tags.includes(item)).length}</span></Badge>)}</div>
      </section>
    </main>
  );
}
