const stickySections = [...document.querySelectorAll('.sticky')]
console.log(stickySections)
let images = [
    'https://rukminim2.flixcart.com/image/832/832/l19m93k0/painting/r/g/a/14-1-dbrush-d211-dbrush-original-imagcvhxjkhsghg2.jpeg?q=70',
    'https://i.pinimg.com/564x/2e/5e/a2/2e5ea2a93218ce62a7651d13e6ce9123.jpg',
    'https://i.pinimg.com/564x/65/a4/d6/65a4d64b8a51a2d3bd4cec08f6edd5c5.jpg',
    'https://i.pinimg.com/736x/6a/73/cf/6a73cfd221d6830d92332408131c3d67.jpg'
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image)
    })

    }
)