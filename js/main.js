$(document).ready(()=>{
    $('.navbar a').click(()=>{
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            600
        )
    })
})