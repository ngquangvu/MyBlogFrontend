
export interface UsableItem {
    icon: string;
    title: string;
    url: string;
}

export interface CustomerItem {
    title: string;
    icon: string;
    url: string
}

export interface FeatureItem {
    description: string;
    icon: string;
    title: string;
}

export interface FooterLink {
    description: string;
    icon: string;
    url: string;
    disable?: boolean;
}

export interface NavItem {
    title: string;
    url: string;
}

export interface ShowcaseSite {
    title: string;
    image: ImageMetadata;
    url: string;
}
