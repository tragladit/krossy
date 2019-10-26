import connect from '@vkontakte/vkui-connect-promise';

const sendShare = async () => {
  try {
    const res = await connect.send("VKWebAppShare", { "link": "https://vk.com/app7108107" })
    console.log(res)
  } catch (err) {
    console.log('#vk-api.onShare#', err)
  }
}

export default sendShare
