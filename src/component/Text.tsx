import React from 'react';

type TextProps = {
  content: string
}

export default function Text({content}: TextProps) {
  return <div dangerouslySetInnerHTML={{__html: content}}/>
};