from google.adk.agents import Agent

from . import prompt

root_agent = Agent(
    name="shopping_assistant_agent",
    model="gemini-2.5-flash-lite",
    description="買い物アシスタントエージェント",
    instruction=prompt.ROOT_AGENT_INSTR,
)
