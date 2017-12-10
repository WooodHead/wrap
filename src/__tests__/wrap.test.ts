import * as assert from "assert";
import wrap from "../wrap";

describe("wrap", () => {
	describe("should correctly wrap text", () => {
		it("should wrap with one character", () => {
			const wrappedText = wrap("test", ",");
			assert.equal(wrappedText, ",test,");
		});

		it("should wrap with multiple character", () => {
			const wrappedText = wrap("test", "--");
			assert.equal(wrappedText, "--test--");
		});

		describe("should wrap with correct opening character", () => {
			it("should wrap with {}", () => {
				const wrappedText = wrap("test", "}");
				assert.equal(wrappedText, "{test}");
			});

			it("should wrap with «»", () => {
				const wrappedText = wrap("test", "»");
				assert.equal(wrappedText, "«test»");
			});

			it("should wrap with []", () => {
				const wrappedText = wrap("test", "]");
				assert.equal(wrappedText, "[test]");
			});

			it("should wrap with <>", () => {
				const wrappedText = wrap("test", ">");
				assert.equal(wrappedText, "<test>");
			});
		});

		describe("should wrap with correct closing character", () => {
			it("should wrap with {}", () => {
				const wrappedText = wrap("test", "{");
				assert.equal(wrappedText, "{test}");
			});

			it("should wrap with «»", () => {
				const wrappedText = wrap("test", "«");
				assert.equal(wrappedText, "«test»");
			});

			it("should wrap with []", () => {
				const wrappedText = wrap("test", "[");
				assert.equal(wrappedText, "[test]");
			});

			it("should wrap with <>", () => {
				const wrappedText = wrap("test", "<");
				assert.equal(wrappedText, "<test>");
			});
		});

		describe("should wrap with more complex pattern", () => {
			it("should wrap with <!--", () => {
				assert.equal(wrap("test", "<!--"), "<!--test--!>");
			});

			it("should wrap with {{}}", () => {
				assert.equal(wrap("test", "{{"), "{{test}}");
				assert.equal(wrap("test", "}}"), "{{test}}");
			});

			it("should wrap with <%%>", () => {
				assert.equal(wrap("test", "<%"), "<%test%>");
				assert.equal(wrap("test", "%>"), "<%test%>");
			});
		});
	});

	describe("should correctly wrap according settings", () => {
		const wrappedText = wrap("test", ",");
		assert.equal(wrappedText, ",test,");
	});
});