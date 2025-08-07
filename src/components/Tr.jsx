
import { Quote, Star } from 'lucide-react';

const Tr = ({ 
  name, 
  role, 
  company, 
  avatar, 
  rating = 5, 
  children, 
  variant = 'default',
  className = ''
}) => {
  // Render stars based on rating
  const renderStars = () => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  // Determine styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return 'bg-white p-6 rounded-lg shadow-md';
      case 'quote':
        return 'relative p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500';
      case 'minimal':
        return 'p-4';
      default:
        return '';
    }
  };

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      {variant === 'quote' && (
        <Quote className="absolute top-4 right-4 text-gray-300" size={40} />
      )}
      
      {/* Rating */}
      {variant !== 'minimal' && renderStars()}
      
      {/* Testimonial text */}
      <div className={`mb-4 ${variant === 'quote' ? 'relative z-10' : ''}`}>
        {variant === 'minimal' && (
          <Quote className="inline-block mr-2 text-gray-400" size={16} />
        )}
        <p className={`text-gray-600 leading-relaxed ${variant === 'quote' ? 'italic' : ''}`}>
          "{children}"
        </p>
      </div>
      
      {/* User info */}
      <div className="flex items-center">
        {/* Avatar */}
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">
            {role}{company && ` at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tr;