from google.adk import Agent

from app.agents.associate import prompt

associate_agent = Agent(
    name="associate_agent",
    model="gemini-2.5-flash-lite",
    description="接客エージェント",
    instruction=prompt.ASSOCIATE_AGENT_INSTR,
)
