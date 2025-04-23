import OpenAI from "openai";

const openai = new OpenAI({
	apiKey:
		"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",
});

const completion = openai.chat.completions.create({
	model: "gpt-4o-mini",
	store: true,
	messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));
