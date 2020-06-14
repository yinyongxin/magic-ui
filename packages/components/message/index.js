import Message from './Message.vue'

let seed = 1
let messages = []

export default (Vue) => {
  let messagelistDiv = document.createElement('div')
  messagelistDiv.setAttribute('class', 'message-list-container')
  document.body.append(messagelistDiv)
  
  Vue.prototype.$message = (options = {}) => {
    let {message, type, time, showClose, autoClose = true} = options

    let Constructor = Vue.extend(Message)
    let tem = new Constructor()
    tem.id ='message_' + seed++;
    tem.$mount()

    messages.push(tem)
    messages.forEach((item, index) => {
      messagelistDiv.appendChild(tem.$el)
    })

    tem.show(message, type, showClose, seed)

    if (autoClose) {
      tem.close(time, () => {
        for (let i = 0; i < messages.length; i++) {
          if (messages[i].id === tem.id) {
            messages.splice(i, 1)
          }
        }
      })
    }
  }
}
