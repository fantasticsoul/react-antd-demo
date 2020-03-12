import React from 'react'
import ServiceIcon from './service.png'
import { feedback } from '../../config/index'
import { BackTop } from 'antd'

export default function header() {
    return (
        <>
            {/* 客服 */}
            <div id="service">
                <a
                    href={feedback}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="out-link feedback"
                >
                    <img src={ServiceIcon} alt="service icon" />
                </a>
            </div>

            {/* 返回顶部 */}
            <BackTop visibilityHeight={400} />
        </>
    )
}
