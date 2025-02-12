import groq from "groq";

import type {
  GetAboutFusionInfoQueryResult,
  GetBlogPostBySlugQueryResult,
  GetBlogPostsQueryResult,
  GetBlogPostsSlugsQueryResult,
  GetCodeOfConductQueryResult,
  GetFusionEventBySlugQueryResult,
  GetFusionEventsQueryResult,
  GetFusionEventsSlugsQueryResult,
  GetHomePageContentQueryResult,
  GetLatestFusionEventQueryResult,
  GetTeamMembersQueryResult,
} from "../sanity.types";
import { client } from "./client";

export const getTeamMembers = async () => {
  const getTeamMembersQuery = groq`*[_type == "teamMember"] | order(order asc)`;
  return (await client.fetch(getTeamMembersQuery)) as GetTeamMembersQueryResult;
};

export const getBlogPosts = async () => {
  const getBlogPostsQuery = groq`*[_type == "blogPost"]{ ..., author-> } | order(publishedAt desc) | order((featured == true) desc)
  `;
  return (await client.fetch(getBlogPostsQuery)) as GetBlogPostsQueryResult;
};

export const getBlogPostBySlug = async (slug: string | undefined) => {
  const getBlogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{ ..., author-> }`;
  return (await client.fetch(getBlogPostBySlugQuery, {
    slug,
  })) as GetBlogPostBySlugQueryResult;
};

export const getBlogPostsSlugs = async () => {
  const getBlogPostsSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)][].slug.current`;
  return (await client.fetch(
    getBlogPostsSlugsQuery,
  )) as GetBlogPostsSlugsQueryResult;
};

export const getFusionEvents = async () => {
  const getFusionEventsQuery = groq` *[_type == "event"] | order(date desc)`;
  return (await client.fetch(
    getFusionEventsQuery,
  )) as GetFusionEventsQueryResult;
};

export const getFusionEventBySlug = async (slug: string | undefined) => {
  const getFusionEventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0]`;
  return (await client.fetch(getFusionEventBySlugQuery, {
    slug,
  })) as GetFusionEventBySlugQueryResult;
};

export const getFusionEventsSlugs = async () => {
  const getFusionEventsSlugsQuery = groq`*[_type == "event" && defined(slug.current)][].slug.current`;
  return (await client.fetch(
    getFusionEventsSlugsQuery,
  )) as GetFusionEventsSlugsQueryResult;
};

export const getLatestFusionEvent = async () => {
  const getLatestFusionEventQuery = groq`*[_type == "event"] | order(date desc)[0]`;
  return (await client.fetch(
    getLatestFusionEventQuery,
  )) as GetLatestFusionEventQueryResult;
};

export const getAboutFusionInfo = async () => {
  const getAboutFusionInfoQuery = groq`*[_type == "about"][0]`;
  return (await client.fetch(
    getAboutFusionInfoQuery,
  )) as GetAboutFusionInfoQueryResult;
};

export const getCodeOfConduct = async () => {
  const getCodeOfConductQuery = groq`*[_type == "codeOfConduct"][0]`;
  return (await client.fetch(
    getCodeOfConductQuery,
  )) as GetCodeOfConductQueryResult;
};

export const getHomePageContent = async () => {
  const getHomePageContentQuery = groq`*[_type == "homepageContent"][0]`;
  return (await client.fetch(
    getHomePageContentQuery,
  )) as GetHomePageContentQueryResult;
};
