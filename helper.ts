export const transformToProductImage = (
  image: string | undefined | null
): string => {
  return image
    ? `https://d1ax460061ulao.cloudfront.net/140x150/${image[0]}/${image[1]}/${image}.jpg`
    : "";
};
