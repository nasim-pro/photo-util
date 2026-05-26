type Props = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

export default function PageContainer({
    title,
    description,
    children,
}: Props) {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>{title}</h1>

                {description && (
                    <p className="page-description">
                        {description}
                    </p>
                )}
            </div>

            {children}
        </div>
    );
}