import React from 'react';
import classes from '../css/Details.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types/type';
import Categories from '../component/Categories';
import Text from '../component/Text';

type ApiRes = {
  post: Post;
}

const Details: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  // URLからpostのidを取得
  const params = useParams();
  const targetedId = Number(params.id);
  console.log("targetedId:", targetedId);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${targetedId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } 
        const data: ApiRes = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error("Failed to fetch post data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();

  },[targetedId]);

  if(isLoading) 
    return <div className={classes.loadingMessage}>読み込み中...</div> 
  
  if (!post) 
		return <div className={classes.errorHandring}>記事が見つかりません。</div>

  return (
    <>
      <div className={classes.detailMain}>
        <div className={classes.detailBox}>
          <div><img className={classes.detailImg} src={post.thumbnailUrl} alt={post.title}></img></div>
          <div className={classes.detailInfo}>
            <div className={classes.detailBoxNav}>
              <div className={classes.detailBoxNavDate}>{new Date(post.createdAt).toLocaleDateString()}</div> {/* newとDateで新しいDateオブジェクトを作成してそれにtoLocaleDateString()メソッドを使って日付の表示を変更した */}
              <Categories categories={post.categories}/>
            </div>
            <div className={classes.homeBoxTexts}>
              <h1 className={classes.detailBoxTextsTitle}>APIで取得した{post.title}</h1>
              <Text content={post.content}/> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;