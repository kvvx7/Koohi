import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Mogadishu').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الوقت الحالي في الصومال هو :


▢ somalia     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ instagram.com/kvvx7`}, {quoted: m});
  };
handler.help = ["tz"]
handler.tags = ["infobot"]
handler.command = /^(tz)$/i
  export default handler;
