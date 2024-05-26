import React from 'react'

const Didyouknow = () => {
    function getRandomString(strings) {
        if (!Array.isArray(strings) || strings.length === 0) {
          throw new Error("Input must be a non-empty array of strings.");
        }
        
        const randomIndex = Math.floor(Math.random() * strings.length);
        return strings[randomIndex];
      }
      
      const stringList = [
        "Studies suggest that around 15% of the general population experiences social anxiety disorder, while a larger percentage may experience occasional social discomfort or difficulty in specific situations.", 
        "It's estimated that over 50% of adults lack confidence in their financial knowledge, with many reporting they didn't receive formal financial education until later in life.",
        "Research indicates that a significant portion of the workforce struggles with disorganization, with some studies suggesting it affects up to 20% of adults. This can lead to missed deadlines, increased stress, and decreased productivity.",
        "Only about 1 in 10 adults meet the recommended daily intake of fruits and vegetables and roughly 23% of adults globally are not meeting the recommended levels of physical activity."
      ];
      
      const randomString = getRandomString(stringList);
      console.log(randomString);
  return (
    <div >
        <p className='randomString'>{randomString}</p>
    </div>
  )
}

export default Didyouknow