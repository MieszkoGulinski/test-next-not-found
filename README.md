# Check how Next.js handles changes in getStaticProps + revalidate + notFound

## Problem

This repository is to check the following problem:

When `getStaticProps` is used with `revalidate`, and we return `notFound: true`, check if the page is revalidated after specified time.

## How to test

To install packages, run `npm install`.

1. Start the backend server by running `node backend.js`.
2. Build the Next.js app by running `npm run build`. It should indicate that existing ids are 1, 2 and 3.
3. Start the Next.js server by running `npm run start`. Verify that the page is accessible at `http://localhost:3000/items/1`.
4. Try to access `http://localhost:3000/items/4`. It should return 404, and the logs should show `Error generating page for item 4`.
5. Stop the backend, uncomment the line `{ id: "4", content: "Item 4" }` in `backend.js`, and start the backend again.
6. Go to `http://localhost:3000/items/4`. **Check if the error 404 disappears after the revalidation time**.

## Check results

The page gets revalidated after the specified time, and the error 404 disappears.
