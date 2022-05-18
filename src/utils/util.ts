//简单的防抖函数
export function debounce(fun: Function, delay: number) {
  let timer: any
  return function (this: any) {
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}

export function throttle(fun: Function, delay: number) {
  let timer: any
  return function (this: any) {
    var args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fun.apply(this, args)
        clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}
