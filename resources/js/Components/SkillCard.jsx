export default function SkillCard({ icon, name }) {
    return (
        <div className="group bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        </div>
    );
}
