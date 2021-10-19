import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import NewHeroCarousel from '../experimental/new-hero-carousel'

const GoalFeature = () => (
  <section className="block-feature hero is-medium is-primary">
    <div className="hero-body">
      <div className="container is-fluid">
        <h2 class="title is-2">Fundraising Goal</h2>
      </div>
      <div class="fundraising-progress mt-6">
        <progress
          class="progress is-success mb-0"
          value={`${(420 / 4000) * 100}`}
          max="100"
        >
          15%
        </progress>

        <div class="donation-goal-labels mt-2">
          <p>$0</p>
          <p>Total Raised: $420</p>
          <p>$4,000</p>
        </div>
      </div>
      <div class="donate-now has-text-centered mt-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button is-info is-large "
          href=""
        >
          Donate Now
        </a>
      </div>
    </div>
  </section>
)

const Timeline = () => (
  <section className="block-feature hero is-medium is-info">
    <div className="hero-body">
      <div className="container is-fluid">
        <div className="columns is-vcentered">
          <div className="column is-one-half">
            <h2 class="title is-2">Project Timeline</h2>
            <div class="timeline mt-6">
              <header class="timeline-header">
                <span class="tag is-medium is-primary">Start</span>
              </header>
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="heading">October 2021</p>
                  <p>Fundraising Begins</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="heading">November - December 2021</p>
                  <p>Permit Acquisition</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="heading">Q1 2021 (Estimated)</p>
                  <p>Construction</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="heading">Q1 2021 (Estimated)</p>
                  <p>Unveiling Ceremony</p>
                </div>
              </div>
              <div class="timeline-header">
                <span class="tag is-medium is-primary">End</span>
              </div>
            </div>
          </div>
          <div className="column is-one-half">
            <h2 class="title is-2">Donor Rewards</h2>
            <section class="content">
              <p class="donor-tier">$10 (??? Tier)</p>
              <ul>
                <li>placeholder</li>
              </ul>
            </section>
            <section class="content">
              <p class="donor-tier">$25 (??? Tier)</p>
              <ul>
                <li>placeholder</li>
              </ul>
            </section>
            <section class="content">
              <p class="donor-tier">$50 (??? Tier)</p>
              <ul>
                <li>placeholder</li>
              </ul>
            </section>
            <section class="content">
              <p class="donor-tier">$100 (??? Tier)</p>
              <ul>
                <li>placeholder</li>
              </ul>
            </section>
            <section class="content">
              <p class="donor-tier">$500+ (??? Tier)</p>
              <ul>
                <li>placeholder</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Budget = () => (
  <section className="block-feature hero is-medium is-primary">
    <div className="hero-body">
      <div className="container is-fluid">
        <h2 class="title is-2">Budget</h2>
        <div class="table-container">
          <table class="table">
            <tr>
              <th>Item</th>
              <th>Cost / Unit ($)</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>$10</td>
              <td>5</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>$10</td>
              <td>5</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>$10</td>
              <td>5</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>$10</td>
              <td>5</td>
              <td>$50</td>
            </tr>
          </table>
        </div>
        <h2 class="subtitle is-3">Stretch Goals</h2>
        <p>placeholder</p>
      </div>
    </div>
  </section>
)

const GetInvolved = () => (
  <section className="block-feature hero is-medium is-info">
    <div className="hero-body has-text-centered">
      <div className="container is-fluid">
        <h2 class="title is-2">Get Involved!</h2>
        <div className="content">
          Want to help? Join the #deck channel on Slack!
          <br />
          <br />
          Contact Drake (dwitt@gtpsiu.org, @deerake on Slack) with any questions
          or concerns.
        </div>
      </div>
    </div>
  </section>
)

const Deck = () => (
  <Layout location="deck" title="Deck">
    <Helmet
      htmlAttribute={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Deck Fundraiser' }]}
      title={`Deck Fundraiser | Psi Upsilon Gamma Tau`}
    />
    <NewHeroCarousel
      imgs={[
        'https://i.imgur.com/eK7MltR.png',
        'https://i.imgur.com/7990t5J.png',
        'https://i.imgur.com/mmLdNe2.png',
      ]}
    ></NewHeroCarousel>
    <GoalFeature></GoalFeature>
    <Timeline></Timeline>
    <Budget></Budget>
    <GetInvolved></GetInvolved>
  </Layout>
)

export default Deck
