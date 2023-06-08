import pandas as pd
import json
import re
def upskill(text):
    text = text.replace('\n', '')
    with open('skill_counts.json', 'r') as f:
        skills_dictionary = json.load(f)
    keywords = [
        r'\b(?:Name|Full Name|First Name|Last Name)\b',
        r'\b(?:Email|E-mail)\b',
        r'\b(?:Phone|Telephone)\b',
        r'\b(?:Address|City|State|Country|Zip Code)\b',
        r'\b(?:Education|School|University|Degree|Major)\b',
        r'\b(?:Experience|Work|Job|Career|Position)\b',
        r'\b(?:Skills|Qualifications|Competencies)\b',
        r'\b(?:References|Referees)\b',
    ]
    
    regex_pattern = '|'.join(keywords)
    matches = re.findall(regex_pattern, text, re.IGNORECASE)
    if len(matches) == 0:
        return "Check input file"

    #print(f"Earliest: {earliest_date}, Latest: {latest_date}, Difference: {date_difference}")
    skills_section_pattern = r'\b(?:Skills|Qualifications|Stack|stack)\b:?\s*([\s\S]*?)(?:\n\n|\Z)'
    skills_section_match = re.search(skills_section_pattern, text, re.IGNORECASE)
    # print(text)
    
    try:
        if not skills_section_match:
            skill_count = 0
        else:
            skills_section = skills_section_match.group(1)
            skills = [skill.strip() for skill in re.split(r',|;', skills_section)]
            skill_count = len(skills)

        skills_values = {}
        for skill in skills:
            if skill in skills_dictionary:
                skills_values[skill] = skills_dictionary[skill]

        # print(skills_values)
        top_5_skills_list = []
        top_5_skills = sorted(skills_values.items(), key=lambda x: x[1], reverse=True)[:5]
        top_5_skills_list = [item[0] for item in top_5_skills]
        return top_5_skills_list

    except UnboundLocalError:
        return "[]"



