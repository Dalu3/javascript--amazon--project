// Exporting an array of delivery options
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export const deliveryOptions = [
  {
    id: '1',              // Unique ID for the delivery option
    deliveryDays: 7,      // Number of days for delivery
    priceCents: 0         // Price in cents (0 means free delivery)
  },
  {
    id: '2',              // Unique ID for a faster delivery option
    deliveryDays: 3,      // Number of days for delivery
    priceCents: 499       // Price in cents (499 cents = $4.99)
  },
  {
    id: '3',              // Unique ID for the fastest delivery option
    deliveryDays: 1,      // Number of days for delivery
    priceCents: 999       // Price in cents (999 cents = $9.99)
  }
];

// Function to get a delivery option by its ID
export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption; // Initialize a variable to hold the matching delivery option

  // Loop through each delivery option in the deliveryOptions array
  deliveryOptions.forEach((option) => {
    // Check if the current option's ID matches the given deliveryOptionId
    if (option.id === deliveryOptionId) {
      deliveryOption = option; // If a match is found, store the option in deliveryOption
    }
  });

  // Return the matching delivery option, or the first option (default) if no match was found
  return deliveryOption || deliveryOptions[0];
}
function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}
export function calculateDeliveryDate(deliveryOption){
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'day');

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
      // This is a shortcut for:
      // remainingDays = remainingDays - 1;
    }
  }
  const dateString = deliveryDate.format('dddd, MMMM D'
  ); 
  return dateString;
}
export function validDeliveryOption(deliveryOptionId) {
  let found = false;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      found = true;
    }
  });

  return found;
}