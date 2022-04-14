import React from "react";
import styled from "styled-components/macro";

const generateSrcSet = (src, extension) => {
  const src1x = src.replace(".jpg", `${extension} 1x`);
  const src2x = src.replace(".jpg", `@2x${extension} 2x`);
  const src3x = src.replace(".jpg", `@3x${extension} 3x`);

  return [src1x, src2x, src3x].join(",");
};

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source type="image/avif" srcset={generateSrcSet(src, ".avif")} />
          <source type="image/jpeg" srcset={generateSrcSet(src, ".jpg")} />
          <Image src={src} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 2px;

  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
