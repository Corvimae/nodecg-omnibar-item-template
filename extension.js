const { OmnibarInterface } = require('nodecg-omnibar');

module.exports = async nodecg => {
  const omnibar = new OmnibarInterface(nodecg);

  // Remove everything below here (unless you really want to )
  omnibar.registerItemType('omnibar-item-test', 'message-item', 'Message: {{message}}', {
    cssAssets: ['css/omnibar-item.css'],
  });
  
  omnibar.enqueueCarouselItem('message-item', { message: 'Hi!' });
  
  omnibar.enqueueCarouselItem('message-item', { message: 'Hi!!!' });

  const { id } = await omnibar.enqueueCarouselItem('message-item', { message: 'Hi!!!!!! :)' });
  
  // Show this item for 5 seconds, then remove it from the queue.
  setTimeout(() => omnibar.dequeueCarouselItem(id), 5000);

  // After five seconds, show an overlay.
  setTimeout(() => {
    omnibar.enqueueOverlay('message-item', { message: 'overlay!!!' });
  }, 5000);
}