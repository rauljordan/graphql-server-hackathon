import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { HtmlPage } from './resolvers';

const validAttributes = {
  id: 'String',
  class: 'String',
  src: 'String',
  content: 'String',
};

export const validHTMLTags = [
  'div',
  'span',
  'img',
  'a',
  'b',
];


var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    scrape: {
      type: HtmlPage,
      // `args` describes the arguments that the `user` query accepts
      args: {
        url: { type: GraphQLString }
      },
      resolve: function (_, { url }) {
        return {};
      }
    }
  }
});






const DIV_TYPE = {
  div: new GraphQLObjectType({
    name: 'div',
    fields: {

    }
  }),
};

var schema = new GraphQLSchema({
  query: queryType,
});


export default schema;