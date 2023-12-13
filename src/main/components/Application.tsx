import './Application.less'

import React, { useCallback } from 'react'

import { uuid } from '../../tools/math'

const Application = (data: any[]) => {
  const render = useCallback(() => {
    return data.map(() => (
      <li key={uuid()}>
        <a href="./page-pc.html">
          <div>
            <img draggable="false" src="https://assets.mybricks.world/icon/pcpage.svg" />
            <label>PC页面</label>
          </div>
        </a>
      </li>
    ))
  }, [])

  return <ul>{render()}</ul>
}

export default Application
