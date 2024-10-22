import { faker } from "@faker-js/faker";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import { array, digits, maxLength, object, parse, pipe, string } from "valibot";

const QueryParams = object({
	id: pipe(array(pipe(string(), digits())), maxLength(50)),
});

const app = express();

app.use(helmet());
app.use(compression());

app.get("/comment", (req, res) => {
	const params = parse(QueryParams, req.query);

	const ids = params.id.flatMap((p) => {
		const count = Math.floor(Math.random() * 5);
		return [...Array(count + 1)].fill(p);
	});

	return res.send(
		ids.map((id) => ({
			comment_id: faker.string.nanoid(4),
			body: faker.lorem.sentence(3),
			rating: faker.number.int(5),
			place_id: id,
		})),
	);
});

app.listen(8084, () =>
	console.log("Server is running on http://localhost:8084"),
);
