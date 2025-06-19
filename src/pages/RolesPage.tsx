import { Edit, Users, Building, MapPin, Crown, Plus, Trash2 } from 'lucide-react'

const roles = [
  { 
    id: 1, 
    name: 'OWNER', 
    displayName: 'Sahip',
    description: 'Tam yetki sahibi',
    icon: Crown,
    color: 'from-purple-500 to-blue-500',
    permissions: [
      'role:create', 'role:update', 'role:delete', 'role:assign', 'role:remove',
      'user:create', 'user:update', 'user:delete', 'company:manage', 'branch:manage',
      'regional:manage', 'financial:full', 'reports:all', 'settings:system'
    ]
  },
  { 
    id: 2, 
    name: 'COMPANY_MANAGER', 
    displayName: 'Şirket Müdürü',
    description: 'Şirket yönetimi',
    icon: Building,
    color: 'from-blue-500 to-cyan-500',
    permissions: [
      'role:assign', 'user:create', 'user:update', 'branch:manage',
      'regional:manage', 'financial:view', 'reports:company', 'settings:company'
    ]
  },
  { 
    id: 3, 
    name: 'BRANCH_MANAGER', 
    displayName: 'Şube Müdürü',
    description: 'Şube yönetimi',
    icon: Users,
    color: 'from-cyan-500 to-teal-500',
    permissions: [
      'user:create', 'user:update', 'branch:view', 'financial:branch',
      'reports:branch', 'inventory:manage', 'staff:manage'
    ]
  },
  { 
    id: 4, 
    name: 'REGIONAL_MANAGER', 
    displayName: 'Bölge Müdürü',
    description: 'Bölgesel yönetim',
    icon: MapPin,
    color: 'from-teal-500 to-green-500',
    permissions: [
      'user:view', 'branch:view', 'regional:view', 'financial:regional',
      'reports:regional', 'analytics:regional'
    ]
  },
]

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">Roller</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg">
            <Plus className="w-5 h-5" />
            Yeni Rol Ekle
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon
            return (
              <div
                key={role.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${role.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Role Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {role.displayName}
                    </h3>
                    <p className="text-sm text-white/60">
                      {role.description}
                    </p>
                    <p className="text-xs text-white/40 font-mono">
                      {role.name}
                    </p>
                  </div>

                  {/* Permissions List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      <h4 className="text-sm font-medium text-white/90">Yetkiler</h4>
                      <div className="w-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                    <div className="max-h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-1">
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {role.permissions.map((permission, index) => (
                          <div
                            key={index}
                            className="inline-block px-2.5 py-1 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs text-white/80 font-medium hover:from-white/25 hover:to-white/15 hover:text-white transition-all duration-200 shadow-sm"
                          >
                            {permission}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-white/50">
                        {role.permissions.length} yetki
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-2 pt-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg border border-white/20 text-white text-sm font-medium transition-all duration-200 hover:scale-105">
                      <Edit className="w-4 h-4" />
                      Düzenle
                    </button>
                    
                    <button className="flex items-center gap-2 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 backdrop-blur rounded-lg border border-red-500/30 text-red-300 text-sm font-medium transition-all duration-200 hover:scale-105">
                      <Trash2 className="w-4 h-4" />
                      Sil
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-8 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{roles.length}</div>
              <div className="text-sm text-white/60">Toplam Rol</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">Aktif</div>
              <div className="text-sm text-white/60">Durum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}