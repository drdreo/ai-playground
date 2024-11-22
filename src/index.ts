import { Application } from "jsr:@oak/oak@14";
import { Router } from "jsr:@oak/oak/router";
import Anthropic from "@anthropic-ai/sdk";
import { cors, type CorsOptions } from "jsr:@momiji/cors";

const anthropic = new Anthropic();

const app = new Application();
const router = new Router();
router
	.get("/", (ctx) => {
		ctx.response.body = "Deno baby!";
	})
	.post("/api/ai", async (ctx) => {
		const { prompt, design } = await ctx.request.body.json();
		if (prompt && design) {
            console.log(`%cAsking the gods for a design for: ${prompt}`, "color: gold");
			console.time("Sending message");
			try {


			const msg = await anthropic.messages.create({
				model: "claude-3-5-sonnet-20241022",
				max_tokens: 2317,
				temperature: 0,
				system:
					"You are a creative marketing AI assistant tasked with adapting and improving a design based on a given JSON structure and a user prompt. Your goal is to enhance the design while maintaining its core elements and structure.",
				messages: [
					{
						"role": "user",
						"content": [
							{
								"type": "text",
								"text":
									'<examples>\n<example>\n<PROMPT>\nImprove this creative design so that my brand increases its click-through-rate\n</PROMPT>\n<DESIGN_JSON>\n{\n    "id": "ab453ba9-1423-44b3-ada9-0aa20a42afe6",\n    "kind": "creative",\n    "width": 120,\n    "height": 90,\n    "loops": 0,\n    "startTime": 0,\n    "fill": "linear-gradient(0.5 1 rgba(0,0,0,1),0.72 0.04 rgba(174,17,178,1))",\n    "preloadImage": {\n        "quality": 70,\n        "format": "jpg",\n        "frames": []\n    },\n    "elements": [\n        {\n            "id": "7a1c4d07-2618-460f-b539-fb06e01830c0",\n            "kind": "text",\n            "actions": [],\n            "animations": [\n                {\n                    "id": "204793da-dc8b-444e-9e72-4a74d580c0c7",\n                    "type": "in",\n                    "timingFunction": "linear",\n                    "templateId": "fade-in",\n                    "keyframes": [\n                        {\n                            "id": "5db54ad6-5738-4a91-a9a1-b58398f50731",\n                            "stateId": "1e44ee99-920c-4135-a327-307f590cfb93",\n                            "time": 0,\n                            "duration": 0\n                        },\n                        {\n                            "id": "a2e192de-2959-45b6-bd07-12d85dc777e6",\n                            "time": 0.4,\n                            "timingFunction": "@timingFunction",\n                            "duration": 0\n                        }\n                    ]\n                },\n                {\n                    "id": "b367da00-ecca-43b3-aa15-46584be502c4",\n                    "type": "out",\n                    "timingFunction": "linear",\n                    "templateId": "fade-out",\n                    "keyframes": [\n                        {\n                            "id": "b273e7be-a3da-43fb-ad3b-3e3a2fd1a637",\n                            "time": 3.6,\n                            "duration": 0\n                        },\n                        {\n                            "id": "dfed8416-a21e-455f-a303-b8aebe40133d",\n                            "stateId": "53da61d6-9ee3-4133-b8b4-11fe4faf14f7",\n                            "time": 4,\n                            "timingFunction": "@timingFunction",\n                            "duration": 0\n                        }\n                    ]\n                }\n            ],\n            "duration": 4,\n            "filters": {},\n            "height": 33,\n            "hidden": false,\n            "mirrorX": false,\n            "mirrorY": false,\n            "opacity": 1,\n            "originX": 0.5,\n            "originY": 0.5,\n            "radius": {\n                "type": "joint",\n                "topLeft": 0,\n                "topRight": 0,\n                "bottomRight": 0,\n                "bottomLeft": 0\n            },\n            "rotationX": 0,\n            "rotationY": 0,\n            "rotationZ": 0,\n            "scaleX": 1,\n            "scaleY": 1,\n            "states": [\n                {\n                    "id": "1e44ee99-920c-4135-a327-307f590cfb93",\n                    "opacity": 0\n                },\n                {\n                    "id": "53da61d6-9ee3-4133-b8b4-11fe4faf14f7",\n                    "opacity": 0\n                }\n            ],\n            "time": 0,\n            "width": 118,\n            "x": 0,\n            "y": 0,\n            "characterSpacing": 0,\n            "fontSize": 12,\n            "horizontalAlignment": "center",\n            "lineHeight": 1.3,\n            "maxRows": 0,\n            "padding": {\n                "top": 0,\n                "left": 0,\n                "right": 0,\n                "bottom": 0\n            },\n            "strikethrough": false,\n            "textColor": "rgba(41,217,232,1)",\n            "textOverflow": "shrink",\n            "underline": false,\n            "uppercase": false,\n            "verticalAlignment": "middle",\n            "content": {\n                "kind": 0,\n                "spans": [\n                    {\n                        "type": "word",\n                        "style": {},\n                        "content": "The",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "space",\n                        "style": {},\n                        "content": " ",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "word",\n                        "style": {},\n                        "content": "best",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "space",\n                        "style": {},\n                        "content": " ",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "word",\n                        "style": {},\n                        "content": "ad",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "end",\n                        "style": {},\n                        "content": "END",\n                        "attributes": {}\n                    }\n                ],\n                "style": {\n                    "padding": {\n                        "top": 0,\n                        "left": 0,\n                        "right": 0,\n                        "bottom": 0\n                    },\n                    "verticalAlignment": "middle",\n                    "maxRows": 0,\n                    "textOverflow": "shrink",\n                    "characterSpacing": 0,\n                    "lineHeight": 1.3,\n                    "__fontFamilyId": ""\n                }\n            },\n            "assetId": "5fdb6bd01aa4550001559d02"\n        },\n        {\n            "id": "595edea2-e901-4be5-9900-4a2d4145aafe",\n            "kind": "button",\n            "actions": [],\n            "animations": [\n                {\n                    "id": "921c1986-2ac7-4965-ab8f-fc702fac220d",\n                    "type": "in",\n                    "timingFunction": "easeOutExpo",\n                    "templateId": "slide-in",\n                    "keyframes": [\n                        {\n                            "id": "ff68cc1f-684d-442c-aacb-a3e81023478e",\n                            "stateId": "bf9b4f47-2e9c-4fa8-a03e-3a672cef597a",\n                            "time": 0,\n                            "duration": 0\n                        },\n                        {\n                            "id": "e114bf82-0c69-4fec-96e3-0064bd7d94a9",\n                            "time": 0.4,\n                            "timingFunction": "@timingFunction",\n                            "duration": 0\n                        }\n                    ],\n                    "settings": {\n                        "direction": {\n                            "name": "Direction",\n                            "value": 180\n                        }\n                    }\n                },\n                {\n                    "id": "758bf358-eb51-4303-a69a-46b47a7dd11b",\n                    "type": "out",\n                    "timingFunction": "linear",\n                    "templateId": "fade-out",\n                    "keyframes": [\n                        {\n                            "id": "605b2c31-0c1a-442d-b041-9487b33c8f03",\n                            "time": 3.6,\n                            "duration": 0\n                        },\n                        {\n                            "id": "af18c563-c667-4b8b-b1b9-c3dc851d5d17",\n                            "stateId": "036e5e6f-c7eb-4323-9cc4-7df32ab661b5",\n                            "time": 4,\n                            "timingFunction": "@timingFunction",\n                            "duration": 0\n                        }\n                    ]\n                }\n            ],\n            "duration": 4,\n            "fill": "rgba(203,83,83,1)",\n            "filters": {},\n            "height": 28,\n            "hidden": false,\n            "mirrorX": false,\n            "mirrorY": false,\n            "opacity": 1,\n            "originX": 0.5,\n            "originY": 0.5,\n            "radius": {\n                "type": "joint",\n                "topLeft": 3,\n                "topRight": 3,\n                "bottomRight": 3,\n                "bottomLeft": 3\n            },\n            "rotationX": 0,\n            "rotationY": 0,\n            "rotationZ": 0,\n            "scaleX": 1,\n            "scaleY": 1,\n            "states": [\n                {\n                    "id": "036e5e6f-c7eb-4323-9cc4-7df32ab661b5",\n                    "opacity": 0\n                },\n                {\n                    "id": "bf9b4f47-2e9c-4fa8-a03e-3a672cef597a",\n                    "x": "@edgePoint(@transition.direction).x",\n                    "y": "@edgePoint(@transition.direction).y"\n                }\n            ],\n            "time": 0,\n            "width": 78,\n            "x": 21,\n            "y": 45,\n            "characterSpacing": 0,\n            "fontSize": 20,\n            "horizontalAlignment": "center",\n            "lineHeight": 1.3,\n            "maxRows": 1,\n            "padding": {\n                "top": 5,\n                "left": 5,\n                "right": 5,\n                "bottom": 5\n            },\n            "strikethrough": false,\n            "textColor": "rgba(255,255,255,1)",\n            "textOverflow": "shrink",\n            "underline": false,\n            "uppercase": false,\n            "verticalAlignment": "middle",\n            "content": {\n                "kind": 0,\n                "spans": [\n                    {\n                        "type": "word",\n                        "style": {},\n                        "content": "Buy",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "space",\n                        "style": {},\n                        "content": " ",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "word",\n                        "style": {},\n                        "content": "Now",\n                        "attributes": {}\n                    },\n                    {\n                        "type": "end",\n                        "style": {},\n                        "content": "END",\n                        "attributes": {}\n                    }\n                ],\n                "style": {\n                    "padding": {\n                        "top": 5,\n                        "left": 5,\n                        "right": 5,\n                        "bottom": 5\n                    },\n                    "verticalAlignment": "middle",\n                    "maxRows": 1,\n                    "textOverflow": "shrink",\n                    "characterSpacing": 0,\n                    "lineHeight": 1.3,\n                    "__fontFamilyId": ""\n                }\n            },\n            "assetId": "5fdb6bd01aa4550001559d02"\n        }\n    ]\n}\n</DESIGN_JSON>\n<ideal_output>\n{"id":"ab453ba9-1423-44b3-ada9-0aa20a42afe6","kind":"creative","width":120,"height":90,"loops":0,"startTime":0,"fill":"rgba(255,255,255,1)","preloadImage":{"quality":70,"format":"jpg","frames":[]},"elements":[{"id":"7a1c4d07-2618-460f-b539-fb06e01830c0","kind":"text","actions":[],"animations":[{"id":"204793da-dc8b-444e-9e72-4a74d580c0c7","type":"in","timingFunction":"linear","templateId":"fade-in","keyframes":[{"id":"5db54ad6-5738-4a91-a9a1-b58398f50731","stateId":"1e44ee99-920c-4135-a327-307f590cfb93","time":0,"duration":0},{"id":"a2e192de-2959-45b6-bd07-12d85dc777e6","time":0.4,"timingFunction":"@timingFunction","duration":0}]},{"id":"b367da00-ecca-43b3-aa15-46584be502c4","type":"out","timingFunction":"linear","templateId":"fade-out","keyframes":[{"id":"b273e7be-a3da-43fb-ad3b-3e3a2fd1a637","time":3.6,"duration":0},{"id":"dfed8416-a21e-455f-a303-b8aebe40133d","stateId":"53da61d6-9ee3-4133-b8b4-11fe4faf14f7","time":4,"timingFunction":"@timingFunction","duration":0}]}],"duration":4,"filters":{},"height":33,"hidden":false,"mirrorX":false,"mirrorY":false,"opacity":1,"originX":0.5,"originY":0.5,"radius":{"type":"joint","topLeft":0,"topRight":0,"bottomRight":0,"bottomLeft":0},"rotationX":0,"rotationY":0,"rotationZ":0,"scaleX":1,"scaleY":1,"states":[{"id":"1e44ee99-920c-4135-a327-307f590cfb93","opacity":0},{"id":"53da61d6-9ee3-4133-b8b4-11fe4faf14f7","opacity":0}],"time":0,"width":118,"x":0,"y":17,"characterSpacing":0,"fontSize":12,"horizontalAlignment":"center","lineHeight":1.3,"maxRows":0,"padding":{"top":0,"left":0,"right":0,"bottom":0},"strikethrough":false,"textColor":"rgba(72,72,72,1)","textOverflow":"shrink","underline":false,"uppercase":false,"verticalAlignment":"middle","content":{"kind":0,"spans":[{"type":"word","style":{},"content":"The","attributes":{}},{"type":"space","style":{},"content":" ","attributes":{}},{"type":"word","style":{},"content":"best","attributes":{}},{"type":"space","style":{},"content":" ","attributes":{}},{"type":"word","style":{},"content":"ad","attributes":{}},{"type":"end","style":{},"content":"END","attributes":{}}],"style":{"padding":{"top":0,"left":0,"right":0,"bottom":0},"verticalAlignment":"middle","maxRows":0,"textOverflow":"shrink","characterSpacing":0,"lineHeight":1.3,"__fontFamilyId":""}},"assetId":"5fdb6bd01aa4550001559d02"},{"id":"595edea2-e901-4be5-9900-4a2d4145aafe","kind":"button","actions":[],"animations":[{"id":"921c1986-2ac7-4965-ab8f-fc702fac220d","type":"in","timingFunction":"easeOutExpo","templateId":"slide-in","keyframes":[{"id":"ff68cc1f-684d-442c-aacb-a3e81023478e","stateId":"bf9b4f47-2e9c-4fa8-a03e-3a672cef597a","time":0,"duration":0},{"id":"e114bf82-0c69-4fec-96e3-0064bd7d94a9","time":0.4,"timingFunction":"@timingFunction","duration":0}],"settings":{"direction":{"name":"Direction","value":180}}},{"id":"758bf358-eb51-4303-a69a-46b47a7dd11b","type":"out","timingFunction":"linear","templateId":"fade-out","keyframes":[{"id":"605b2c31-0c1a-442d-b041-9487b33c8f03","time":3.6,"duration":0},{"id":"af18c563-c667-4b8b-b1b9-c3dc851d5d17","stateId":"036e5e6f-c7eb-4323-9cc4-7df32ab661b5","time":4,"timingFunction":"@timingFunction","duration":0}]}],"duration":4,"fill":"rgba(203,83,83,1)","filters":{},"height":20,"hidden":false,"mirrorX":false,"mirrorY":false,"opacity":1,"originX":0.5,"originY":0.5,"radius":{"type":"joint","topLeft":3,"topRight":3,"bottomRight":3,"bottomLeft":3},"rotationX":0,"rotationY":0,"rotationZ":0,"scaleX":1,"scaleY":1,"states":[{"id":"036e5e6f-c7eb-4323-9cc4-7df32ab661b5","opacity":0},{"id":"bf9b4f47-2e9c-4fa8-a03e-3a672cef597a","x":"@edgePoint(@transition.direction).x","y":"@edgePoint(@transition.direction).y"}],"time":0,"width":49,"x":63,"y":60,"characterSpacing":0,"fontSize":20,"horizontalAlignment":"center","lineHeight":1.3,"maxRows":1,"padding":{"top":5,"left":5,"right":5,"bottom":5},"strikethrough":false,"textColor":"rgba(255,255,255,1)","textOverflow":"shrink","underline":false,"uppercase":false,"verticalAlignment":"middle","content":{"kind":0,"spans":[{"type":"word","style":{},"content":"40%","attributes":{}},{"type":"space","style":{},"content":" ","attributes":{}},{"type":"word","style":{},"content":"Off","attributes":{}},{"type":"end","style":{},"content":"END","attributes":{}}],"style":{"padding":{"top":5,"left":5,"right":5,"bottom":5},"verticalAlignment":"middle","maxRows":1,"textOverflow":"shrink","characterSpacing":0,"lineHeight":1.3,"__fontFamilyId":""}},"assetId":"61289c432248ff2855447b37"},{"id":"3c4cff32-2a63-444d-b8b2-2b6cbf0e295b","kind":"image","actions":[],"animations":[],"duration":4,"filters":{},"height":12,"hidden":false,"mirrorX":false,"mirrorY":false,"opacity":1,"originX":0.5,"originY":0.5,"radius":{"type":"joint","topLeft":0,"topRight":0,"bottomRight":0,"bottomLeft":0},"rotationX":0,"rotationY":0,"rotationZ":0,"scaleX":1,"scaleY":1,"states":[],"time":0,"width":55,"x":60,"y":5,"imageSettings":{"x":0.5,"y":0.5,"quality":85,"sizeMode":"fit","highDpi":false},"imageAsset":{"id":"96498","url":"https://c.bannerflow.net/accounts/andreas-hahn/5fc6314ba1f95115c0ba2bc0/images/bd752ad3-492c-4b2a-baa0-af0231763511.svg","width":120,"height":26}}]}\n</ideal_output>\n</example>\n</examples>\n\n',
							},
							{
								"type": "text",
								"text":
									`You will be provided with two inputs:\n1. A JSON representation of the initial design\n2. A prompt from the user requesting changes or improvements\n\nFirst, here's the initial design JSON:\n<design_json>\n${design}\n</design_json>\n\nThis JSON structure represents a creative design with various elements. Each element has several properties such as \"id\", \"kind\", \"x\", \"y\", and other attributes specific to its type. Your task is to modify this structure based on the user's prompt. Keep in mind that the JSON contract must not be hallucinated. Especially be careful with text element content. If text is adapted, provide it as a new, plain-string property which will be post-processed.\n\nNow, here's how to proceed:\n\n1. Carefully read and analyze the provided JSON structure to understand the current design elements and their relationships.\n\n2. Read the user's prompt:\n<prompt>\n${prompt}\n</prompt>\n\n3. Based on the prompt, identify which elements of the design need to be modified, added, or removed. Consider how the changes will affect the overall design and user perception.\n\n4. Make the necessary adjustments to the JSON structure. This may include:\n   - Modifying existing element properties\n   - Adding new elements\n   - Removing elements\n   - Optimizing texts / copy of the marketing message\n\n5. After making the requested changes, think creatively about how to further improve the design. Consider:\n   - Enhancing visual appeal\n   - Improving audience targeting\n   - Adding complementary elements that support the main theme or purpose\n   - Ensuring brand consistency across the design\n\n6. Implement these additional improvements by making further modifications to the JSON structure.\n\n7. Provide your response in the following format which will only contain the modified elements (skip unchanged properties and elements but ALWAYS include the element id):\n   <adapted_design>\n   [Insert the modified JSON here]\n   </adapted_design>\n   \n   <explanation>\n   [Provide a detailed explanation of the changes made, including:\n   - How you interpreted and implemented the user's prompt\n   - What additional improvements you made and why]\n   </explanation>\n\nRemember to maintain valid JSON syntax in your adapted design. Be creative and thoughtful in your improvements, always considering the marketing value and the overall coherence of the design.`,
							},
						],
					},
				],
			});
			console.timeEnd("Sending message");
			console.log(msg.content[0].text);
			ctx.response.body = msg.content[0].text;
			return;
			} catch (error: any) {
				console.error(error);
				ctx.response.body = "An error occurred";
				ctx.response.status = error.status;
				return;
			}
		}

		ctx.response.body = { design, prompt };
	});

app.use(cors());
app.use(router.allowedMethods());
app.use(router.routes());

await app.listen({ port: 8000 });
