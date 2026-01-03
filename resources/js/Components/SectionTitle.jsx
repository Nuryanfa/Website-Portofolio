export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
    );
}
