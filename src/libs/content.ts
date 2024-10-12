const { DEV_TO_API_URL } = import.meta.env;

type Articles = Array<{
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: Array<string>;
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
}>;

export async function fetchArticles() {
  const res = await fetch(DEV_TO_API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const articles = data as Articles;

  return articles;
}
