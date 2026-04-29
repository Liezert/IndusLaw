export default function LoadingSpinner({ message = 'Menganalisis...' }) {
  return (
    <div className="loading-container">
      <div className="spinner-ring">
        <div></div><div></div><div></div><div></div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
}
