import React from 'react';

type Props = {
  content: string
}

export default function Text({content}: Props) {
  return <div dangerouslySetInnerHTML={{__html: content}}/>
};