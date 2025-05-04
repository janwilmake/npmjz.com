export default {
  fetch: (request) =>
    new Response(null, {
      headers: {
        Location: `https://uuithub.com/npmjs.com/${
          new URL(request.url).pathname
        }`,
      },
      status: 307,
    }),
};
