Problem : What capability gap are we solving?
Traditional fraud detection systems act like black-box classifiers, they simply label a message as fraud or safe without explaining why or what’s at stake.
This creates a major gap.


No decision reasoning


No risk evolution


No financial context


No learning feedback loop


 We target this gap by building a system that simulates how an intelligent agent actually makes fraud decisions step-by-step, not just the final answer.

Environment What does the agent do?
We built a reinforcement learning-style fraud detection environment using OpenEnv principles.
 Agent Interaction Loop
Message Input → Environment → Agent Action → Reward → Feedback
What the agent sees (Observation)


Message text


Extracted features:


urgency signals


suspicious links


keywords


sender patterns





What the agent does (Actions)
The agent chooses:


0 → Safe


1 → Fraud


2 → Suspicious



 What the agent gets (Reward)
Reward is based on correctness + financial impact


Correct fraud detection → high positive reward


Suspicious classification → partial reward


Missed fraud → heavy penalty


Wrong classification → negative reward


Additionally:


Detecting fraud → money saved


Missing fraud → money lost


Risky case → money at risk


this makes the environment realistic, not just academic.
 System Architecture
 Backend (FastAPI)


env.py → environment logic


reward_engine.py → scoring + financial impact


models.py → structured outputs


API:


POST /reset


POST /step





🔹 Frontend (React SaaS UI)


Input → message, URL, sender


Calls backend APIs


Visualizes:


Risk level


Confidence


Signals


Explanation


Financial impact




 Important: UI does not generate logic, only displays backend output.

 Results — What changed after training?
We evaluated two agents:
 Baseline Agent
 Random actions


Low and unstable rewards


 Trained / Improved Agent


Learns fraud patterns


Maximizes reward over time


More consistent decisions

 Evidence of Learning

Reward increases over episode

Fewer missed fraud cases

Better classification consistency


 This is shown using a reward vs episode graph

Example
Input:
"Win ₹10,000 now!!! Click here"


Before → predicted Safe 


After → predicted Fraud 



 Why does this matter?
This system is relevant for:
 Banks & fintech


Prevent financial fraud in real-time


 Messaging platforms


Detect phishing and scam messages


 Cybersecurity systems


Understand attack patterns, not just detect them



 Key Value
Unlike traditional systems, this platform provides:


Explainable AI decisions


Financial risk visibility


Sequential reasoning simulation


Learning-based improvement


 It’s not just detection — it’s decision intelligence

 What we built (simple explanation)
We built an AI-powered fraud decision environment where:


An agent analyzes messages step-by-step


Makes decisions (safe / fraud / suspicious)


Receives reward based on correctness and financial impact


Improves over time


The frontend allows users to interact with this system and visualize:


reasoning


risk


financial consequences
