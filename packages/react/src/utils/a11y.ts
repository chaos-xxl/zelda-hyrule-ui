import React from 'react'

/**
 * 为"用 div/span 实现的可点击元素"补齐键盘无障碍。
 *
 * 当组件接受 `onClick` 但根节点不是原生 <button>（通常因为需要复杂的边框/装饰结构）时，
 * 调用本函数可一次性补齐：role="button" + tabIndex + Enter/Space 键盘激活。
 * 若未传 onClick，则返回空对象（元素保持非交互、不进 Tab 序列）。
 *
 * @example
 * <div {...interactiveProps(onClick)} className={...}>...</div>
 */
export function interactiveProps(
  onClick?: () => void,
): React.HTMLAttributes<HTMLElement> {
  if (!onClick) return {}
  return {
    role: 'button',
    tabIndex: 0,
    onClick,
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick()
      }
    },
  }
}
