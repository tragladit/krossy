import connect from '@vkontakte/vk-connect';

const sendShare = async () => {
  try {
    const res = await connect.sendPromise("VKWebAppShare", { "link": "https://vk.com/app7188761" })
    console.log(res)
  } catch (err) {
    console.log('#vk-api.onShare#', err)
  }
}

export default sendShare
