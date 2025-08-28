/* Mixitup filter*/

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    Animation: {
        duration: 300,
    },
});

    /* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/* contact Form*/

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || Message.value === '')
{
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        
        contactMessage.textContent = 'write all the input fields';
    } else {
        // ServiceID - TemplateID - #form - Publickey
        emailjs.senForm('service_9g7rq0q','template_eg5c7zd','#contact-form','FBvJ0q037WURrYpJq')

    .then(() => {
        contactMessage.classList.add('color-light');
        contactMessage.textContent ='message sent ';

        setTimeout(() => {
            contactMessage.textContent = '';
    }, 5000);

    (error)  => {
        alert ('OPPs! SOMETHING WENT WRONG...', error);
    }

    });
    contactName.value='';
    contactEmail.value='';
    Message.value='';
    }

};

contactForm.addEventListener('submit', sendEmail);