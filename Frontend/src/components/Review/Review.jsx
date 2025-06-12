import React from 'react'
import './Review.css'

const Review = () => {
  const reviews = [
    {
      name: 'Anjali R.',
      feedback: 'Street2Site transformed my local food stall into a full digital business. Within weeks, I saw an increase in orders through my new website!',
      rating: 5,
    },
    {
      name: 'Rahul M.',
      feedback: 'They understood my needs perfectly and delivered a clean, fast website. Their support is also super responsive!',
      rating: 4,
    },
    {
      name: 'Deepika K.',
      feedback: 'I had zero online presence. Now my saree shop is getting inquiries from across the city, thanks to Street2Site!',
      rating: 5,
    },
  ]

  return (
    <div className="review-container">
      <h2 className="review-title">What Our Clients Say</h2>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">“{review.feedback}”</p>
            <div className="review-author">- {review.name}</div>
            <div className="review-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
