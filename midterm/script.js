"use strict";

// ========================================
// IE #1: Goofiness Level Counter
// ========================================

let score = 0;

function incrementScore() {
    score += 10;
    updateScoreDisplay();
    console.log("🎉 Epic Win! +10 Goofiness Points!");
}

function decrementScore() {
    score = Math.max(0, score - 5);
    updateScoreDisplay();
    console.log("😅 Minor Fail! -5 Goofiness Points");
}

function resetScore() {
    score = 0;
    updateScoreDisplay();
    console.log("🔄 Starting fresh! Back to 0!");
}

function updateScoreDisplay() {
    document.getElementById('scoreDisplay').textContent = score;
    
    // Add fun messages based on score
    if (score >= 100) {
        console.log("🏆 LEGENDARY STATUS! You're a competition MASTER!");
    } else if (score >= 50) {
        console.log("⭐ You're doing GREAT! Keep going!");
    }
}

// ========================================
// IE #2: Tab System for Competition Paths
// ========================================

function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    evt.currentTarget.classList.add('active');

    // Add goofiness points for exploring!
    incrementScore();
    
    // Log which competition they chose
    const competitionNames = {
        'comp1': '🪂 Sky Diving Instructor',
        'comp2': '🎤 Game Show Host',
        'comp3': '🍕 Competitive Eater',
        'comp4': '🎪 Circus Performer'
    };
    console.log(`You chose: ${competitionNames[tabName]}!`);
}

// ========================================
// Story Choice Results Handler
// ========================================

function showStoryResult(resultId) {
    // Find the current active tab
    const currentTab = document.querySelector('.tab-content.active');
    
    // Hide all story results in the current tab (except the first story-display which is the prompt)
    const allResults = currentTab.querySelectorAll('.story-display:not(:first-child)');
    allResults.forEach(result => result.classList.add('hidden'));

    // Show the selected result
    document.getElementById(resultId).classList.remove('hidden');
    
    // Add goofiness points for making a choice
    incrementScore();
    
    // Fun console messages based on choice
    const choiceMessages = {
        'sky1': '🦅 The Eagle Master! What a legend!',
        'sky2': '📱 Internet famous! 10 million likes!',
        'sky3': '🎬 You\'re a meme now! Congratulations!',
        'game1': '🧠 Genius improvisation! You invented a new game!',
        'game2': '💃 Dance party master!',
        'game3': '👥 The crowd loves you!',
        'eat1': '🌀 Revolutionary tornado technique!',
        'eat2': '✂️ Tactical genius with the scissors!',
        'eat3': '🏆 Fearless determination!',
        'circus1': '🤹 Master juggler status achieved!',
        'circus2': '😂 Comedy gold! Everyone\'s laughing!',
        'circus3': '🦸 The Cotton Candy Creature is born!'
    };
    
    if (choiceMessages[resultId]) {
        console.log(choiceMessages[resultId]);
    }

    // Smooth scroll to the result
    document.getElementById(resultId).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

// ========================================
// Mad Libs Story Generator
// ========================================

document.getElementById('madlibsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get all the user inputs
    const name = document.getElementById('name').value;
    const adjective1 = document.getElementById('adjective1').value;
    const noun1 = document.getElementById('noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const animal = document.getElementById('animal').value;
    const food = document.getElementById('food').value;

    // Create the hilarious story with user inputs
    const story = `
        <h3>🎪 Your First Day of Training! 🎪</h3>
        
        <p>On a <span class="user-input">${adjective1}</span> Tuesday morning, <span class="user-input">${name}</span> arrived at the Ultimate Competition Academy carrying nothing but a <span class="user-input">${noun1}</span> and a dream.</p>
        
        <p>"Welcome!" shouted the head coach, who was surprisingly a talking <span class="user-input">${animal}</span>. "Today we'll be training by <span class="user-input">${verb1}</span> for exactly 47 minutes!"</p>
        
        <p><span class="user-input">${name}</span> felt extremely <span class="user-input">${adjective2}</span> but decided to give it their best shot anyway. The training was intense - at one point, they had to balance <span class="user-input">${food}</span> on their head while reciting the alphabet backwards!</p>
        
        <p>"This is harder than I thought!" gasped <span class="user-input">${name}</span>, still <span class="user-input">${verb1}</span> as fast as possible. The <span class="user-input">${animal}</span> coach just laughed and said, "If it were easy, everyone would do it!"</p>
        
        <p>By lunchtime, <span class="user-input">${name}</span> had mastered the art of using a <span class="user-input">${noun1}</span> in ways nobody thought possible. The other trainees were so impressed that they started a slow clap!</p>
        
        <p>The <span class="user-input">${animal}</span> coach awarded <span class="user-input">${name}</span> with a golden trophy shaped like <span class="user-input">${food}</span> and declared, "You are the most <span class="user-input">${adjective1}</span> student we've ever had!"</p>
        
        <p><strong>And that's how <span class="user-input">${name}</span> became a LEGEND at the Competition Academy! 🏆</strong></p>
        
        <p style="text-align: center; margin-top: 2rem; font-size: 1.1rem;">🎉 <em>The End... or is it just the beginning?</em> 🎉</p>
    `;

    // Display the story
    const resultDiv = document.getElementById('madlibsResult');
    resultDiv.innerHTML = story;
    resultDiv.classList.remove('hidden');
    
    // Add LOTS of goofiness points for creating a story!
    score += 50;
    updateScoreDisplay();
    
    console.log("🎭 Amazing story created! +50 Goofiness Points!");
    console.log(`Starring: ${name} the ${adjective1} champion!`);

    // Smooth scroll to the story
    resultDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
});

// ========================================
// IE #3: Theme Changer
// ========================================

function changeTheme(theme) {
    const body = document.body;
    
    switch(theme) {
        case 'extreme':
            body.style.background = 'linear-gradient(135deg, #FF0000 0%, #8B0000 100%)';
            console.log("🔥 EXTREME MODE ACTIVATED! Things just got INTENSE!");
            break;
        case 'party':
            body.style.background = 'linear-gradient(135deg, #FF1493 0%, #9370DB 100%)';
            console.log("🎉 PARTY MODE! Let's celebrate!");
            break;
        case 'champion':
            body.style.background = 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)';
            console.log("🏆 CHAMPION MODE! You're a winner!");
            break;
        case 'default':
            body.style.background = 'linear-gradient(135deg, #FFA500 0%, #FF6347 100%)';
            console.log("🔄 Back to classic training mode!");
            break;
    }
    
    // Add goofiness points for customizing!
    incrementScore();
}

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log(`📍 Navigating to: ${targetId}`);
        }
    });
});

// ========================================
// Welcome Message on Page Load
// ========================================

window.addEventListener('load', function() {
    console.log('🎪 ============================================ 🎪');
    console.log('   WELCOME TO THE ULTIMATE COMPETITION ACADEMY!');
    console.log('   Where silly dreams become hilarious reality!');
    console.log('🎪 ============================================ 🎪');
    console.log('');
    console.log('💡 TIP: Open your browser console to see fun messages!');
    console.log('🎯 Your mission: Reach 100 Goofiness Points!');
    console.log('');
});

// ========================================
// Image Gallery Click Handler (Bonus Feature!)
// ========================================

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a fun animation when clicking gallery images
        this.style.transform = 'scale(1.15) rotate(5deg)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
        
        // Add goofiness points for exploring the gallery
        score += 5;
        updateScoreDisplay();
        
        console.log('📸 Nice! You explored the gallery! +5 Goofiness Points!');
    });
});
