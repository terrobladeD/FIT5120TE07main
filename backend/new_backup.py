import re
from datetime import datetime
def extract_dates(text):
    print('~~~~~',len(text))
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
    date_patterns = [
        r'\d{1,2}/\d{1,2}/\d{2,4}',
        r'\d{1,2}/\d{4}',
        r'(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},?\s+\d{4}',
        r'(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4}'
    ]
    
    parsed_dates = []
    for pattern in date_patterns:
        dates = re.findall(pattern, text)
        for date in dates:
            for fmt in ('%m/%d/%Y', '%m/%Y', '%B %d, %Y', '%B %d %Y', '%b %d, %Y', '%b %d %Y', '%B %Y', '%b %Y'):
                try:
                    parsed_date = datetime.strptime(date, fmt)
                    parsed_dates.append(parsed_date)
                    break
                except ValueError:
                    pass
    if not parsed_dates:
        return "Your Resume is not in the correct format.Please upload the correct Resume."
    earliest_date = min(parsed_dates)
    latest_date = max(parsed_dates)
    date_difference = (latest_date - earliest_date).days

    # Limit date_difference to a maximum of 3650 days
    if date_difference > 3650:
        date_difference = 3650

    #print(f"Earliest: {earliest_date}, Latest: {latest_date}, Difference: {date_difference}")
    skills_section_pattern = r'\b(?:Skills|Qualifications)\b:?\s*([\s\S]*?)(?:\n\n|\Z)'
    skills_section_match = re.search(skills_section_pattern, text, re.IGNORECASE)
    
    if not skills_section_match:
        skill_count = 0

    else:
        skills_section = skills_section_match.group(1)


        skills = [skill.strip() for skill in re.split(r',|;', skills_section)]


        skill_count = len(skills)
    print('~~~~~', date_difference)
    print('~~~~~', skill_count)
    if date_difference <= 1095 and skill_count <= 20:
        return 'You are at HIGH risk. You need more work experience and skills'
    elif date_difference <= 1095 and 20<=skill_count <= 30:
        return 'You are at HIGH risk. You need more work experience and few more skills'
    elif date_difference <= 1095 and skill_count >= 30:
        return 'You are at MID risk. You need more work experience'
    elif 1095 <= date_difference <= 2920 and skill_count <= 20:
        return 'You are at MID risk. You need few more work experience and more skills'
    elif 1095 <= date_difference <= 2920 and 20<=skill_count <= 30:
        return 'You are at MID risk. You need few more work experience and skills'
    elif 1095 <= date_difference <= 2920 and skill_count >= 30:
        return 'You are at MID risk. You need few more work experience'
    elif date_difference >= 2920 and skill_count <= 20:
        return 'You are at MID risk. You need more skills'
    elif date_difference >= 2920 and 20<=skill_count <= 30:
        return 'You are at LOW risk. You need few more skills'
    elif date_difference >= 2920 and skill_count >= 30:
        return 'You are at LOW risk. You will not be replaced'
    else:
        return 'Unexpected file'
    
    





