import Message from './Message.vue'

let seed = 1
let messages = []
export default (Vue) => {
  Vue.prototype.$message = (options) => {
    let {message, type, time, showClose} = options

    let Constructor = Vue.extend(Message)
    let tem = new Constructor()
    tem.id ='message_' + seed++;
    tem.$mount()


    messages.push(tem)
    messages.forEach((item, index) => {
      // tem.$el.style['top'] = index*45 + 'px'
      document.body.appendChild(tem.$el)
    })

    tem.close(3000, () => {
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].id === tem.id) {
          messages.splice(i, 1)
          console.log(messages.length)
        }
      }
    })


    return tem.show(message, type, time, showClose, seed)
  }
}