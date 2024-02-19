function howtoEvents() {

    const button = {
        subscribers: {
            'click': [],
            'onChange': [],
            'mouseOver': [],
        },
        addEventListener: function (eventName, subscriber) {
            this._subscriber[eventName] = [...this._subscriber[eventName], subscriber];
        },
        removeEventListener: function (eventName, subscriber) {
            this._subscriber[eventName] = [...this._subscriber[eventName], subscriber];
        },
        click: function () {
            console.log('click')
        }
    }

    console.log(' button.subscribers.click;: ', button.subscribers.click);
}
