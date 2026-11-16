import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  return (
    <main className="profile-page">
      <section className="profile-card" aria-labelledby="profile-title">
        <div className="profile-avatar" aria-hidden="true">
          {(user?.name || 'U').trim().charAt(0).toUpperCase()}
        </div>
        <p className="profile-eyebrow">YOUR ACCOUNT</p>
        <h1 id="profile-title">My Profile</h1>
        <p className="profile-intro">Your Animal Spirit community details.</p>

        <dl className="profile-details">
          <div>
            <dt>Full name</dt>
            <dd>{user?.name || 'Not available'}</dd>
          </div>
          <div>
            <dt>Email address</dt>
            <dd>{user?.email || 'Not available'}</dd>
          </div>
          {joinedDate && (
            <div>
              <dt>Member since</dt>
              <dd>{joinedDate}</dd>
            </div>
          )}
        </dl>

        <Link to="/home" className="profile-home-link">Continue exploring</Link>
      </section>
    </main>
  );
}
