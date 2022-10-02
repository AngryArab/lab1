//Mohammad Salam - 30039101
//controllers for pages


export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Moe'} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayprojectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};


