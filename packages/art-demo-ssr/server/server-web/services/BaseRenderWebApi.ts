import Aggregator from 'art-ssr-aggregator-node/dist/aggregator';

const SERVER_HOST_RENDER = process.env.SERVER_HOST_RENDER || '';
const SERVER_PORT_RENDER = process.env.SERVER_PORT_RENDER || '';

// export class BaseRenderWebApi extends WebApiServer {
//   constructor() {
//     const baseUrl = `http://${SERVER_HOST_RENDER}:${SERVER_PORT_RENDER}`;
//     super({
//       baseURL: baseUrl,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }
// }

// export const baseRenderWebApi = new BaseRenderWebApi();

export const aggregator = new Aggregator({
  url: `http://${SERVER_HOST_RENDER}:${SERVER_PORT_RENDER}/batch`
});