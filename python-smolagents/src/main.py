import os

import httpx
from smolagents import CodeAgent, OpenAIServerModel, WebSearchTool, tool


@tool
def get_image_color(word: str) -> str:
    """
    Get the image color from a given English word using the Color Palette API.

    Args:
        word: The query in English.

    Returns:
        A image color text with hex code.
    """
    response = httpx.get("https://colormagic.app/api/palette/search?q=", params={"q": word})
    json = response.json()
    return f"{json[0]['text']} ({json[0]['colors'][0]})."


def main():
    model = OpenAIServerModel(
        model_id="gemini-2.5-flash-lite-preview-06-17",
        api_base="https://generativelanguage.googleapis.com/v1beta/openai/",
        api_key=os.getenv("GEMINI_API_KEY"),
    )
    agent = CodeAgent(tools=[WebSearchTool(), get_image_color], model=model)

    agent.run(
        "京都のおすすめ観光コースを考えて、そのコースに合うイメージカラーを1つ日本語で教えてください。イメージカラーはget_image_colorツールを利用して取得してください。"
    )


if __name__ == "__main__":
    main()
