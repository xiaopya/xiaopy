import React from 'react';
import classNames from "classnames";
import styles from './home.less';
import {distinguishTime} from '@/utils/index';

/**
 * 首页
 * @constructor
 */
export default function HomePage() {

    const contents = [
        {
            time: 1,
            timeText: '早上好',
            content: "清晨的鸟鸣,是大自然的馈赠.启程吧,属于我们的旅途也要开始了.",
        },
        {
            time: 2,
            timeText: '中午好',
            content: "正午的阳光,让人想要小睡片刻.找个地方休息一下如何?",
        },
        {
            time: 3,
            timeText: '晚安啦',
            content: "安静的世界,适合好好休息.明天见...",
        },
    ]


    return (
        <div className={classNames({
            [styles.xiaopyHome]: true,
            'mainPadding': true,
        })}>
            <div className={classNames({
                [styles.pyCard]: true,
            })}>
                [<span>你我都在这旅行的路上,这段路不妨结伴同行</span>]
                {
                    contents.map(({time, timeText, content}) => {
                        if (time === distinguishTime()) {
                            return (
                                <div className={classNames({
                                    [styles.text]: true,
                                })} key={time}>
                                    <p>[{timeText}]&nbsp;&nbsp;&nbsp;{content}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}
