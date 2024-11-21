import Anthropic from "@anthropic-ai/sdk";

console.log("Creating Anthropic!");
const anthropic = new Anthropic();


console.time("Sending message");
const msg = await anthropic.messages.create({
	model: "claude-3-5-sonnet-20241022",
	max_tokens: 1024,
	messages: [{
		role: "user",
		content:
			"hello, im here now, calling in from Deno",
	}],
});
console.timeEnd("Sending message");
console.log(msg.content[0].text);
