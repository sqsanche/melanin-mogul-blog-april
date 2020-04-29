import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import gql from 'graphql-tag';

const fragments = gql`
  fragment post on Post {
    id
    title
    slug
    text
    author { ...author }
   
    likes { id }
    createdAt
  } 
  fragment comment on Comment {
    id
    text
    author { ...author }
  }
  fragment author on User {
    id
    name
    email
  }
`;

const getItems = gql`
  query {
    posts: feed {
      ...post
    }
  }

  ${fragments}
`;

const getItem = gql`
  query postBySlug($slug: String!) {
    posts: postBySlug(slug: $slug) {
      ...post
    }
  }
  ${fragments}
`;

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(
    private apollo: Apollo,
  ) { }

  getItems(): Observable<any[]> {
    return this.apollo
      .query({
        query: getItems
      })
      .pipe(
        map(res => res.data['posts']),
        // delay(300)
      )
  }

  getItem(slug: string): Observable<any> {
    return this.apollo
      .query({
        query: getItem,
        variables: {
          slug,
        }
      })
      .pipe(
        map(res => res.data['posts']),
        // delay(300)
      )
  }

}